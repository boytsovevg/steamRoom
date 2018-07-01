import { Injectable } from '@angular/core';


@Injectable()
export class ArrayService {

    getFlat(array, depth = 1) {
        return array.reduce((a, v) => a.concat(depth > 1 && Array.isArray(v) ?
            this.getFlat(v, depth - 1) :
            v),
        []);
    }

    getUniqBy(arrays: any[][], compareField: string): any[] {

        const smallArray = this._getSmaller(arrays);
        let smallMap = this._getMap(smallArray, compareField);

        for (const arr of arrays) {
            smallMap = this._getMap(arr.filter(el => smallMap.has(el[compareField])), compareField);
        }

        return Array.from(smallMap.values());
    }

    _getSmaller(arrays: any[][]): any[] {
        return arrays.reduce((small: any[], item: any[]) => {

            const lengths = arrays.map(el => el.length);
            if (item.length === Math.min(...lengths)) {

                small = item;
            }

            return small;

        }, []);
    }

    _getMap(items: any[], field: string): Map<any, any> {
        const map = new Map<any, any>();

        for (const item of items) {
            map.set(item[field], item);
        }

        return map;
    }
}
