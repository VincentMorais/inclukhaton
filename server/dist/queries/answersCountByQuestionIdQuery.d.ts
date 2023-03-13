import * as mongoose from 'mongoose';
export declare const answersCountByQuestionIdQuery: (idQuestion: string, idTheme: string, idLaunch: string, goodAnswer: boolean, idTeam: string) => ({
    $group: {
        _id: string;
        items: {
            $sum: number;
        };
    };
} | {
    $match: {
        launchId: mongoose.Types.ObjectId;
        themeId: mongoose.Types.ObjectId;
        isAGoodAnswer: boolean;
    };
})[];
