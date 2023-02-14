import * as C from './styles';
import { CharacterSides } from '../../types/CharacterSides';

type Props = {
    x: number,
    y: number,
    side: CharacterSides,
    name: string,
}

export const Npc = ({ x, y, side, name }: Props) => {
    const size = 30;
    const sides = {
        down: 0,
        left: -30,
        right: -60,
        up: -90
    }

    return (
        <C.Container
            size={size}
            left={x * size}
            top={y * size}
            sidePosition={sides[side] ?? 0}
        >
            <C.NameBox>{name}</C.NameBox>
        </C.Container>
    );
}

export const ImportantNpc = ({ x, y, side, name }: Props) => {
    const size = 30;
    const sides = {
        down: 0,
        left: -30,
        right: -60,
        up: -90
    }

    return (
        <C.Container
            size={size}
            left={x * size}
            top={y * size}
            sidePosition={sides[side] ?? 0}
        >
            <C.SpecialNameBox>{name}</C.SpecialNameBox>
        </C.Container>
    );
}