import {getCamelCase} from './getCamelCase.js'

toCamelCase('the-stealth-warrior');
// theStealthWarrior

toCamelCase('The_Stealth-Warrior');
// TheStealthWarrior

toCamelCase('The_Stealth_Warrior');
// TheStealthWarrior