// Creator: https://github.com/MrPeanutbutterz 
/* this script weakens the security of a server, use arg to define target server with a delay */

/** @param {NS} ns */
export async function main(ns) {
    var target = ns.args[0];
    var delay = ns.args[1];

    await ns.sleep(delay)
    await ns.weaken(target);
}