import * as mongoose from 'mongoose';
export declare const finishedThemesCount: (idLaunch: string, idTeam: string) => ({
    $group: {
        _id: string;
        items: {
            $sum: number;
        };
    };
} | {
    $match: {
        launchId: mongoose.Types.ObjectId;
        answeredAll: boolean;
    };
})[];
export declare const begunThemesCount: (idLaunch: string, idTeam: string) => ({
    $group: {
        _id: string;
        items: {
            $sum: number;
        };
    };
} | {
    $match: {
        launchId: mongoose.Types.ObjectId;
    };
})[];
