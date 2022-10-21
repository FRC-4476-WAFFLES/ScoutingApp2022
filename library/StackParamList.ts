
type StackParamList = {
    Home: undefined;
    Settings: undefined;
    Pregame: {
        matchNum?: number;
    };
    Match: {
        matchNum: number;
    };
    QRCode: {
        matchNum: number;
        data: string;
    };
}

export default StackParamList;