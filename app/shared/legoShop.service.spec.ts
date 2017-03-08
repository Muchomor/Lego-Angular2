import { LegoShopSet } from './LegoShopSet';
import { LegoShopService } from './legoShop.service';

describe('LegoShopService Tests', () => {

    let legoShopService: LegoShopService;

    beforeEach(() => {
        legoShopService = new LegoShopService();
    });

    it('should return all lego sets', () => {
        // given
        let result: LegoShopSet[];

        // when
        result = legoShopService.getLegoSets();

        // then
        expect(result.length).toBe(8);
    });

    it('should return filtered lego sets', () => {
        // given
        const query = 'dog';
        let result: LegoShopSet[];

        // when
        result = legoShopService.getLegoSets(query);

        // then
        expect(result.length).toBe(1);
        expect(result[0].descr).toBe('Dog');
    });

    it('should return top 3 lego sets', () => {
        // given
        let result: LegoShopSet[];

        // when
        result = legoShopService.getTop3Sets();

        // then
        expect(result.length).toBe(3);
        expect(result[0].descr).toBe('Schrodingers Cat');
        expect(result[1].descr).toBe('Cat and Mouse');
        expect(result[2].descr).toBe('\'Sirius\' EV3 Robot for FLL');
    });

    it('should find one lego set', () => {
        // given
        const id = 'MOC-0757';
        let result: LegoShopSet;

        // when
        result = legoShopService.findOne(id);

        // then
        expect(result.descr).toBe('Schrodingers Cat');
    });
});
