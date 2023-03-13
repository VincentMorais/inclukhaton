import * as mongoose from 'mongoose';
export declare const userThemesByLaunchIdWithAnsweredAllTrueQuery: (idLaunch: string, nbThemesMax: number, idTeam: string) => ({
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
    $group?: undefined;
} | {
    $group: {
        _id: {
            userId: string;
            launchId: string;
        };
        nbThemePerUser: {
            $sum: number;
        };
    };
    $match?: undefined;
} | {
    $match: {
        nbThemePerUser: {
            $gte: number;
        };
    };
    $group?: undefined;
})[];
