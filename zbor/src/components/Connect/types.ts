export type Word = {
    ID: number;
    Word: string;
};

export type State = {
    wordFrom: Word;
    wordTo: Word;
    wordLike: string;
    wordLikeRAW: string;
    fire: number;
    connections: number;
};

export type Props = {
    reloadStats: Function;
    stats: { [key: string]: any };
}