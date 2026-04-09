import vituum from 'vituum'
import twig from '@vituum/vite-plugin-twig'
import vercel from 'vite-plugin-vercel';
import tailwindcss from '@tailwindcss/vite'
import webfontDownload from 'vite-plugin-webfont-dl';
import fs from "fs";
import path from "path";

const PAGES_DIR = path.resolve("src/pages");


function generateRewrites() {
    const files = fs.readdirSync(PAGES_DIR);
    return files
        .filter(file => file.endsWith(".twig"))
        .map(file => {
            const name = path.basename(file, ".twig");
            return {
                source: `/${name}`,
                destination: `/${name}.html`,
            };
        });
}

export default {
    plugins: [
        tailwindcss(),
        vituum(),
        twig({
            root: './src',
            functions: {
                get_image: () => {
                    return false;
                },
                html_classes: (...classes) => {
                    const result = classes.flatMap(item => {
                        if (Array.isArray(item)) {
                            // Array: ['block', isActive && 'active']
                            return item.filter(Boolean);
                        }
                        if (typeof item === 'object' && item !== null) {
                            // Object: { "btn": true, "btn-primary": condition }
                            return Object.entries(item)
                                .filter(([cls, condition]) => Boolean(condition))
                                .map(([cls]) => cls);
                        }
                        // String or other primitives
                        return item ? String(item) : [];
                    });
                    return result.join(' ');
                }
            },
            filters: {
                format_title: (title) => {
                    return title.replace("{","<span>").replace("}", "</span>")
                }
            },
        }),
        webfontDownload([
            // Download and optimize local fonts from /src/assets/fonts
            // Automatically converts TTF to WOFF2 with subsetting support
        ], {
            injectAsStyleTag: false,
            minifyCss: true,
            embedFonts: false,
            async: true,
        }),
        vercel(),
    ],
    vercel: {
        rewrites: generateRewrites(),
    }
}