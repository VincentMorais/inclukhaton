import * as mongoose from 'mongoose';
export declare const usersWithAtLeastOneAnswerByLaunchIdQuery: (idLaunch: string, idTeam: string) => ({
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
    $group?: undefined;
} | {
    $group: {
        _id: {
            userId: string;
        };
    };
    $match?: undefined;
})[];
