import { createSelector } from "reselect";
import { formValueSelector as formValueSelectorCreator } from "redux-form";
import { counterSelector } from "./counter";

export const errorSelectorCreator = (formName, fieldName) => {
    const formValueSelector = formValueSelectorCreator(formName);

    return createSelector(
        counterSelector,
        state => formValueSelector(state, fieldName),
        (counter, fieldValue) => {
            console.log("temp", counter, fieldValue);

            if (fieldValue && fieldValue.length < 3) {
                return "Ало! Длина должна быть БОЛЬШЕ 3х символов";
            }

            if (counter < 3) {
                return "АЛО! СЧЕТЧИК МЕЬНШЕ ТРЁХ!!!";
            }

            return undefined;
        }
    );
};
