# Button Component Usage

## Overview
Flexible button component with multiple variants, sizes, and optional icon.

## Parameters

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `text` | string | Yes | - | Button text content |
| `link` | string | Yes | - | Button URL/href |
| `target` | string | No | `_self` | Link target (`_self`, `_blank`, etc.) |
| `variant` | string | No | `primary` | Button style variant |
| `size` | string | No | `md` | Button size |
| `showIcon` | boolean | No | `true` | Display arrow icon |

## Variants

### `primary` (default)
Primary color background with white text
```twig
{% include "components/button.twig" with {
    text: "Primary Button",
    link: "/page"
} %}
```

### `secondary`
White background with primary border and primary text
```twig
{% include "components/button.twig" with {
    text: "Secondary Button",
    link: "/page",
    variant: "secondary"
} %}
```

### `outline`
Transparent background with primary border
```twig
{% include "components/button.twig" with {
    text: "Outline Button",
    link: "/page",
    variant: "outline"
} %}
```

### `ghost`
Transparent background, no border
```twig
{% include "components/button.twig" with {
    text: "Ghost Button",
    link: "/page",
    variant: "ghost"
} %}
```

## Sizes

### `sm` - Small
```twig
{% include "components/button.twig" with {
    text: "Small Button",
    link: "#",
    size: "sm"
} %}
```

### `md` - Medium (default)
```twig
{% include "components/button.twig" with {
    text: "Medium Button",
    link: "#",
    size: "md"
} %}
```

### `lg` - Large
```twig
{% include "components/button.twig" with {
    text: "Large Button",
    link: "#",
    size: "lg"
} %}
```

## Without Icon

```twig
{% include "components/button.twig" with {
    text: "No Icon",
    link: "#",
    showIcon: false
} %}
```

## Combination Examples

```twig
{# Large secondary button without icon #}
{% include "components/button.twig" with {
    text: "Learn More",
    link: "/about",
    variant: "secondary",
    size: "lg",
    showIcon: false
} %}

{# Small outline button #}
{% include "components/button.twig" with {
    text: "Details",
    link: "/details",
    variant: "outline",
    size: "sm"
} %}

{# Large ghost button with external link #}
{% include "components/button.twig" with {
    text: "Visit Site",
    link: "https://example.com",
    target: "_blank",
    variant: "ghost",
    size: "lg"
} %}
```

## Preview
Visit `/ui-kit.html` to see all button variants and sizes in action.
