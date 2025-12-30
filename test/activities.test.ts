import {expect, it} from "vitest"
import {updateActivity} from "../src/activities";
import {Activity} from "../src/types"; // описываем тестовый сценарий


// в каждом тесте есть 3 важные части => arrange (given), act (when), assert (then)
it('updates activity', () => {
    const activity: Activity = {
        id: "1",
        name: 'Learn TypeScript',
        secondsToComplete: 3600
    };
    const updatedFields: Activity = {
        id: "2",
        name: 'Learn Vitest',
        secondsToComplete: 10000
    };
    const updatedActivity = updateActivity(activity, updatedFields);
    // для соотвествия реальных значений ожидаемому результату в тестах
    expect(activity).toEqual(updatedFields);
    expect(updatedActivity).toEqual(updatedFields)
});

it.todo('calculate activity completion percentage', () => {

});