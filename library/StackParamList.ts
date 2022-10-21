
type StackParamList = {
    Home: undefined;
    Settings: undefined;
    Pregame: {
        matchNum?: number;
    };
    Match: {
        matchNum: number;
        teamNum: number;
    };
    QRCode: {
        matchNum: number;
        data: string;
    };
}

export default StackParamList;