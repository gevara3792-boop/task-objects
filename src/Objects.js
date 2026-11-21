/**
 * 1. Обновляет данные о человеке в зависимости от пола.
 * Для женщин удаляет свойство age (если есть).
 * Для мужчин добавляет income = 100000 (если нет).
 *
 * @param {Object} person - объект с данными о человеке
 * @returns {Object} обновленный объект
 */
export function personUpdate(person) {
    // Создаем поверхностную копию, чтобы не мутировать исходный объект (хорошая практика)
    const updatedPerson = { ...person };

    if (updatedPerson.gender === 'female') {
        // Если свойство age есть, удаляем его
        if ('age' in updatedPerson) {
            delete updatedPerson.age;
        }
    } else if (updatedPerson.gender === 'male') {
        // Если свойства income нет, добавляем его
        if (!('income' in updatedPerson)) {
            updatedPerson.income = 100000;
        }
    }

    return updatedPerson;
}

/**
 * 2. Возвращает общий список названий полей трех объектов в алфавитном порядке.
 *
 * @param {Object} obj1
 * @param {Object} obj2
 * @param {Object} obj3
 * @returns {string[]} массив уникальных ключей в алфавитном порядке
 */
export function objectFieldsList(obj1, obj2, obj3) {
    // Собираем все ключи из трех объектов в один массив
    const allKeys = [
        ...Object.keys(obj1),
        ...Object.keys(obj2),
        ...Object.keys(obj3),
    ];

    // Используем Set для удаления дубликатов (если у объектов есть одинаковые поля)
    // Затем сортируем по алфавиту
    return [...new Set(allKeys)].sort();
}

/**
 * 3. Создает массив клонов переданного объекта с добавлением поля id.
 * Учитывает вложенные объекты (глубокое клонирование).
 *
 * @param {Object} obj - исходный объект
 * @param {number} count - количество клонов
 * @returns {Object[]} массив клонов
 */
export function objectClone(obj, count) {
    const clones = [];

    for (let i = 0; i < count; i++) {
        // Глубокое клонирование объекта
        // structuredClone доступен в Node.js 17+ и современных браузерах
        // Если тесты выдают ошибку, что structuredClone is not defined,
        // используйте JSON.parse(JSON.stringify(obj)) в качестве fallback
        const clone =
            typeof structuredClone === 'function'
                ? structuredClone(obj)
                : JSON.parse(JSON.stringify(obj));

        // Добавляем порядковый номер. В тестах ожидается нумерация с 0.
        clone.id = i;

        clones.push(clone);
    }

    return clones;
}
