import { Typography } from "@mui/material";
import { useEffect } from "react";
import { useDencrypt } from "use-dencrypt-effect";

const decryptOptions = {
    chars: [
        'あ', 'ぃ', 'ぁ', 'あ', 'ぃ', 'い', 'ぅ', 'う', 'ぇ', 'え', 'ぉ', 'お', 'か', 'が', 'き', 'ぎ', 'く', 'ぐ', 'け', 'げ', 'こ', 'ご', 'さ', 'ざ', 'し', 'じ', 'す', 'ず', 'せ', 'ぜ', 'そ', 'ぞ', 'た', 'だ', 'ち', 'ぢ', 'っ', 'つ', 'づ', 'て', 'で', 'ど', 'と', 'な', 'に', 'ぬ', 'ね', 'の', 'は', 'ば', 'ぱ', 'ひ', 'び', 'ぴ', 'ふ', 'ぶ', 'ぷ', 'へ', 'べ', 'ぺ', 'ほ', 'ぼ', 'ぽ', 'ま', 'み', 'み', 'む', 'め', 'も', 'ゃ', 'や', 'ゅ', 'ゆ', 'ょ', 'よ', 'ら', 'り', 'る', 'れ', 'ア', 'ァ', '゠', 'ゟ', 'ゞ', 'ゝ', '゜', '゛', '', '゚', 'ゖ', 'ゕ', 'ゔ', 'ん', 'を', 'ゑ', 'ゐ', 'わ', 'ゎ', 'ろ', 'ィ', 'イ', 'ゥ', 'ウ', 'ェ', 'エ', 'ォ', 'オ', 'カ', 'ガ', 'キ', 'ギ', 'ク', 'グ', 'ケ', 'ゲ', 'コ', 'ゴ', 'サ', 'ト', 'デ', 'テ', 'ヅ', 'ツ', 'ッ', 'ヂ', 'チ', 'ダ', 'タ', 'ゾ', 'ソ', 'ゼ', 'セ', 'ズ', 'ス', 'ジ', 'シ', 'ザ', 'ド', 'ナ', 'ニ', 'ヌ', 'ネ', 'ノ', 'ハ', 'バ', 'パ', 'ヒ', 'ビ', 'ピ', 'フ', 'ブ', 'プ', 'ヘ', 'ベ', 'ペ', 'ホ', 'ヮ', 'ロ', 'レ', 'ル', 'リ', 'ラ', 'ヨ', 'ョ', 'ユ', 'ュ', 'ヤ', 'ャ', 'モ', 'ム', 'メ', 'ミ', 'マ', 'ポ', 'ボ', 'ワ', 'ヰ', 'ヱ', 'ヲ', 'ン', 'ヴ', 'ヵ', 'ヶ', 'ヷ', 'ヸ', 'ヹ', 'ヺ', '・', 'ー', 'ヽ', 'ヾ', 'ヿ', '㍐'
    ],
    interval: 50,
};

const TextDecrypt = (props) => {
    const { result, dencrypt } = useDencrypt(decryptOptions);

    useEffect(() => {
        const updateText = () => {
            dencrypt(props.text || "");
        };

        const action = setTimeout(updateText, 0);

        return () => clearTimeout(action);
    }, [dencrypt, props.text]);

    return (
        <Typography variant={props.variant} align={props.alignment}>
            {result}
        </Typography>
    );
};

export default TextDecrypt;