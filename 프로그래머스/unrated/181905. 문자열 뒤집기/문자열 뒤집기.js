const solution = (str, s, e) => {
    str = str.split("")
    return [...str.slice(0,s), ...str.slice(s, ++e ).reverse(), ...str.slice(e)].join("")
}