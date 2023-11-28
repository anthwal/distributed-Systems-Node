
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export abstract class IQuery {
    __typename?: 'IQuery';

    abstract recipe(id?: Nullable<string>): Nullable<Recipe> | Promise<Nullable<Recipe>>;

    abstract pid(): Nullable<number> | Promise<Nullable<number>>;
}

export class Recipe {
    __typename?: 'Recipe';
    id: string;
    name: string;
    steps?: Nullable<string>;
    ingredients: Nullable<Ingredient>[];
}

export class Ingredient {
    __typename?: 'Ingredient';
    id: string;
    name: string;
    quantity?: Nullable<string>;
}

type Nullable<T> = T | null;
