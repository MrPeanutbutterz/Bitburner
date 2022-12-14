// Creator: https://github.com/MrPeanutbutterz 
/* this script weakens the security, grows the balance, hacks the money avaliable, runs incremental on every hack + 1% */

/** @param {NS} ns */
export async function main(ns) {

    //\\ SCRIPT SETTINGS
	ns.disableLog("ALL")

    var target = ns.args[0]
    var securityThresh = ns.getServerMinSecurityLevel(target) + 5

    while (true) {
        for (var i = 15; i < 99;) {

            if (ns.getServerSecurityLevel(target) > securityThresh) {
                await ns.weaken(target)

            } else if (ns.getServerMoneyAvailable(target) < ns.getServerMaxMoney(target) * i / 100) {
                await ns.grow(target)

            } else {
                await ns.hack(target)
                i++
            }
        }
    }
}