---
title: 'Source list'
pubDate: 2024-07-01
description: 'This is a list of all my source files.'
author: 'Silke Van den Brempt'
tags: ["Bron", "School"]
---
[Back](../index.html)
# Academie year
## Year: 2018-2022
### 2018-2019 ###
- ***2018-2019***
    - Photography 
        1. bron
    - Visual Education 2D/3D
        1. bron
    - Observational signs
        1. bron 
    - Graphic design
        1. bron 
### 2019-2020 ###
- ***2019-2020***
    - Photography 
        1. bron
    - Visual Education 2D/3D
        1. bron
    - Observational signs
        1. bron 
    - Graphic design
        1. bron 
### 2020-2021 ###
- ***2020-2021***
    - Photography 
        1. bron
    - Visual Education 2D/3D
        1. bron
    - Observational signs
        1. bron 
    - Graphic design
        1. bron 
### 2021-2022 ###
- ***2021-2022***
    - Photography 
        1. bron
    - Visual Education 2D/3D
        1. bron
    - Observational signs
        1. bron 
    - Graphic design
        1. bron
    - Gip (final work)
        1. bron

# Devine year
## Year: 2022-2026
### 2022-2023 ###
- ***2022-2023***
    - Web 1
        1. bron
    - Creative code 1
        1. bron
    - Design 1
        1. bron
    - Ux 1
        1. bron 
    - Web 2
        1. bron
    - Creative code 2
        1. bron
    - Design 2
        1. bron
    - Ux 2
        1. bron 

### 2023-2024 ###
- ***2023-2024***
    - Web 3
        1. bron
    - Creative code 3
        1. bron
    - Design 3
        1. bron
    - Motion 1
        1. bron
    - Ux 3
        1. bron 
    - Design 4
        1. bron
    - Motion 2
        1. bron
    - Ux 4
        1. bron 

### 2024-2025 ###
- ***2024-2025***
    - Web 4
        1. bron
    - Creative code 4
        1. bron
   
### 2025-2026 ###
- ***2025-2026***
    - Stage
        1. bron 

<style>
:root {
    --ff-text: avenir;
    --ff-heading1: bodini;

    --fs-xs: 15px;
    --fs-s: 17px;
    --fs-m: 21px;
    --fs-l: 30px;
    --fs-xl: 2.5rem;
    --fs-xxl: 3.5rem;

    --c-background: #2C2B2B;
    --c-text: #DCEDDB;
    --c-green-dark: #547361;
    --c-green-light: #74875B;
    --c-gold: #D4AF37;
}

body{
    margin: 3rem 3rem;
    background-color: var(--c-background)
}

h1{
    color:var(--c-text);
}

a{
    margin-left:-2rem;
    color:var(--c-gold);
    text-decoration: none;

    &::before {
        display: inline-block;
        padding-right: 8px;
        content: "\2190"; // arrow right unicode;
        transition: transform 0.3s ease-out;
    }

    &:hover {

        &::before {
            transform: translateX(-4px);
        }
    }
}

p{
    margin-top:-1.2rem;
    color: var(--c-gold);
    margin-left:0.8rem;
    margin-bottom:3rem
}
h2{
font-size:var(--fs-s);
color:var(--c-gold);
margin-left:0.8rem;
margin-top:-1rem;
margin-bottom: 5rem;
font-style:oblique;
}

h3{
    position:absolute;
    margin-top:-1.4rem;
    margin-left:4rem;
    background-color: var(--c-background);
    z-index:3;
    color: var(--c-gold);
    font-family:var(--ff-text);
    padding: 0.5rem;
    font-size:var(--fs-m)
}

strong{
    display:none;
}

/* niveau one */
ul > li {
    font-weight: bold;
    border-style: solid;
    border-width:0.1rem;
    border-color: var(--c-gold);
    margin-bottom: 3rem;  
    padding-top:0.5rem; 
    list-style:none;  
}

/* niveau two */
ul > li > ul > li,
ul > li > ol > li {
    color: var(--c-green-light);
    font-style: italic;
    border:none;
    margin-top:1rem;
}

/* niveau three */
ul > li > ul > li > ol > li,
ul > li > ol > li > ol > li {
    color: var(--c-text);
    border:none;
}
</style>
