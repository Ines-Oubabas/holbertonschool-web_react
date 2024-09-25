/// <reference path="./crud.d.ts" />

import { RowID, RowElement } from './interface';
import * as CRUD from './crud';

// Création d'un objet row avec les valeurs spécifiées
const row: RowElement = { firstName: 'Guillaume', lastName: 'Salva' };

// Insertion de la ligne et assignation de la valeur à 'newRowID'
const newRowID: RowID = CRUD.insertRow(row);

// Mise à jour de la ligne avec un âge
const updatedRow: RowElement = { firstName: 'Guillaume', lastName: 'Salva', age: 23 };
CRUD.updateRow(newRowID, updatedRow);

// Suppression de la ligne
CRUD.deleteRow(newRowID);
