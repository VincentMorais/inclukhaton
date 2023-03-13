import * as mongoose from 'mongoose';
export declare const averageScoreQuery: (idLaunch: string, idTheme: string, idTeam: string) => ({
    $match: {
        launchId: mongoose.Types.ObjectId;
        answeredAll: boolean;
    };
    $group?: undefined;
} | {
    $group: {
        _id: string;
        totalScore: {
            $sum: string;
        };
        items?: undefined;
    };
    $match?: undefined;
} | {
    $group: {
        _id: string;
        items: {
            $avg: string;
        };
        totalScore?: undefined;
    };
    $match?: undefined;
})[];
