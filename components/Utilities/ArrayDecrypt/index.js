import { useDencrypt } from "use-dencrypt-effect";
import { useEffect, useState } from "react";
import { Typography, Grid } from "@mui/material";

const decryptOptions = {
    chars: [
        'あ', 'ぃ', 'ぁ', 'あ', 'ぃ', 'い', 'ぅ', 'う', 'ぇ', 'え', 'ぉ', 'お', 'か', 'が', 'き', 'ぎ', 'く', 'ぐ', 'け', 'げ', 'こ', 'ご', 'さ', 'ざ', 'し', 'じ', 'す', 'ず', 'せ', 'ぜ', 'そ', 'ぞ', 'た', 'だ', 'ち', 'ぢ', 'っ', 'つ', 'づ', 'て', 'で', 'ど', 'と', 'な', 'に', 'ぬ', 'ね', 'の', 'は', 'ば', 'ぱ', 'ひ', 'び', 'ぴ', 'ふ', 'ぶ', 'ぷ', 'へ', 'べ', 'ぺ', 'ほ', 'ぼ', 'ぽ', 'ま', 'み', 'み', 'む', 'め', 'も', 'ゃ', 'や', 'ゅ', 'ゆ', 'ょ', 'よ', 'ら', 'り', 'る', 'れ', 'ア', 'ァ', '゠', 'ゟ', 'ゞ', 'ゝ', '゜', '゛', '', '゚', 'ゖ', 'ゕ', 'ゔ', 'ん', 'を', 'ゑ', 'ゐ', 'わ', 'ゎ', 'ろ', 'ィ', 'イ', 'ゥ', 'ウ', 'ェ', 'エ', 'ォ', 'オ', 'カ', 'ガ', 'キ', 'ギ', 'ク', 'グ', 'ケ', 'ゲ', 'コ', 'ゴ', 'サ', 'ト', 'デ', 'テ', 'ヅ', 'ツ', 'ッ', 'ヂ', 'チ', 'ダ', 'タ', 'ゾ', 'ソ', 'ゼ', 'セ', 'ズ', 'ス', 'ジ', 'シ', 'ザ', 'ド', 'ナ', 'ニ', 'ヌ', 'ネ', 'ノ', 'ハ', 'バ', 'パ', 'ヒ', 'ビ', 'ピ', 'フ', 'ブ', 'プ', 'ヘ', 'ベ', 'ペ', 'ホ', 'ヮ', 'ロ', 'レ', 'ル', 'リ', 'ラ', 'ヨ', 'ョ', 'ユ', 'ュ', 'ヤ', 'ャ', 'モ', 'ム', 'メ', 'ミ', 'マ', 'ポ', 'ボ', 'ワ', 'ヰ', 'ヱ', 'ヲ', 'ン', 'ヴ', 'ヵ', 'ヶ', 'ヷ', 'ヸ', 'ヹ', 'ヺ', '・', 'ー', 'ヽ', 'ヾ', 'ヿ', '㍐'
    ],
    interval: 20
};

const values = ["Industrial Engineer", "Data Analyst"];

const ArrayDecrypt = (props) => {
    const { result, dencrypt } = useDencrypt(decryptOptions);

    useEffect(() => {
        let i = 0;

        const action = setInterval(() => {
            dencrypt(values[i]);

            i = i === values.length - 1 ? 0 : i + 1;
        }, 3000);

        return () => clearInterval(action);
    }, []);

    return (
        <>
            <Grid item>
                <Typography variant={props.variant} align={props.alignment}>
                    {/* {result} */}
                </Typography>
            </Grid>
        </>
    )
};

export default ArrayDecrypt;