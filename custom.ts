
/**
* このファイルを使って、独自の関数やブロックを定義してください。
* 詳しくはこちらを参照してください：https://minecraft.makecode.com/blocks/custom
*/



/**
 * Custom blocks
 */
//% weight=100 color=#0fbc11 icon=""
namespace custom {
    /**
     * TODO: describe your function here
     * @param n describe parameter here, eg: 5
     * @param s describe parameter here, eg: "Hello"
     * @param e describe parameter here
     */
    //% block
    export function tp(n: number): void {
            blocks.place(GRASS, pos(0, n-1, 0))
            blocks.place(IRON_BLOCK, pos(1, n-1, 0))
            blocks.place(GLASS, pos(-1, n-1, 0))
            player.teleport(pos(0, n, 0))

    }

    /**
     * TODO: describe your function here
     * @param value describe value here, eg: 5
     */

}
