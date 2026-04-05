function extract(content) {
    const el = document.getElementById(content);
    const text = el.textContent;
    console.log(text);
    const pattern = /\(.*?\)/g;
    const matches = text.match(pattern);
    
    return matches.map(match => match.slice(1, -1).join('; '));
}