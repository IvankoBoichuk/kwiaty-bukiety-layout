import vituum from 'vituum'
import twig from '@vituum/vite-plugin-twig'
import vercel from 'vite-plugin-vercel'
import tailwindcss from '@tailwindcss/vite'
import webfontDownload from 'vite-plugin-webfont-dl'
import fs from 'fs'
import path from 'path'

const PAGES_DIR = path.resolve('src/pages')

function generateRewrites() {
    const files = fs.readdirSync(PAGES_DIR)
    return files
        .filter((file) => file.endsWith('.twig'))
        .map((file) => {
            const name = path.basename(file, '.twig')
            return {
                source: `/${name}`,
                destination: `/${name}.html`,
            }
        })
}

export default {
    plugins: [
        tailwindcss(),
        vituum(),
        twig({
            root: './src',
            functions: {
                get_image: () => {
                    return false
                },
                html_classes: (...classes) => {
                    const result = classes.flatMap((item) => {
                        if (Array.isArray(item)) {
                            // Array: ['block', isActive && 'active']
                            return item.filter(Boolean)
                        }
                        if (typeof item === 'object' && item !== null) {
                            // Object: { "btn": true, "btn-primary": condition }
                            return Object.entries(item)
                                .filter(([_, condition]) => Boolean(condition))
                                .map(([cls]) => cls)
                        }
                        // String or other primitives
                        return item ? String(item) : []
                    })
                    return result.join(' ')
                },
            },
            filters: {
                format_title: (title) => {
                    return title.replace('{', '<span>').replace('}', '</span>')
                },
                fancy_title: (title) => {
                    const parts = title.split(/\s*\n\s*/)

                    if (parts.length !== 3) return `<span class="text-dark-text">${title}</span>`

                    const [p1, p2, p3] = parts

                    return `
  								      <span class="font-[Cormorant_Garamond] text font-semibold text-[38px] leading-7 text-dark-text">${p1}</span>
  								      <span class="text-base font-semibold leading-6 text-dark-text">${p2}</span>
  								      <span class="font-[Cormorant_Garamond] font-medium italic text-[42px] leading-6 text-dark-text">${p3}</span>
  								  `
                        .replace(/\s+/g, ' ')
                        .trim()
                },
            },
        }),
        webfontDownload(
            [
                // Download and optimize local fonts from /src/assets/fonts
                // Automatically converts TTF to WOFF2 with subsetting support
            ],
            {
                injectAsStyleTag: false,
                minifyCss: true,
                embedFonts: false,
                async: true,
            },
        ),
        vercel(),
    ],
    vercel: {
        rewrites: generateRewrites(),
    },
}
