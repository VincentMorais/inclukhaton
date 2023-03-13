import {Body, Controller, Delete, Get, Param, Post} from '@nestjs/common';
import { QuestionIncluscoreService } from 'src/incluscore/theme/question.service';
import {PropositionIncluscoreService} from 'src/incluscore/theme/proposition.service';
import {UserAnswerIncluscoreDocument} from 'src/incluscore/entities/userAnswer.entity';

@Controller('stats')
export class StatsController {

    constructor(
		private readonly propositionService: PropositionIncluscoreService,
	) {}

    @Get()
    async get_pourcentage(){
        const goodAnswer: number = await this.propositionService.findBy("isAGoodAnswer", true);
        const badAnswer: number = await this.propositionService.findBy("isAGoodAnswer", false);
        const allAnswer: number = await this.propositionService.countAll();

        const pourcentageGoodAnswer = (goodAnswer/allAnswer)*100;
        const pourcentageFalseAnswer = (badAnswer/allAnswer)*100;

        return [pourcentageGoodAnswer, pourcentageFalseAnswer];
    }

}
