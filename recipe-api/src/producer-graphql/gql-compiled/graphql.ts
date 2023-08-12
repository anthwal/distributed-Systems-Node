
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export abstract class IQuery {
    abstract recipe(id?: Nullable<string>): Nullable<Recipe> | Promise<Nullable<Recipe>>;

    abstract pid(): Nullable<number> | Promise<Nullable<number>>;
}

export class Recipe {
    id: string;
    name: string;
    steps?: Nullable<string>;
    ingredients: Nullable<Ingredient>[];
}

export class Ingredient {
    id: string;
    name: string;
    quantity?: Nullable<string>;
}

type Nullable<T> = T | null;
