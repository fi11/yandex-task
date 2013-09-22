Задание разработчика интерфейсов
================================

*Задание сделано с использованием BEM и библиотек bem-core, bem-components@v2.*
*Блоки rating и progress были выделены в общую библиотеку для дальнейшего реиспользования*

Live Example (http://pavelsilinw.github.io/yandex-task/)[http://pavelsilinw.github.io/yandex-task/]

Блок rating
-----------
Показывает текущий рейтинг, при модификторе interactive позволяет выставить рейтинг от 1-ой до 5-ти звезд. Внешний вид легко меняется с помощью модификатора theme.

[Выделенный общий уровень](https://github.com/pavelsilinw/bem-interface-lib/tree/master/common.blocks/rating)

[Выделенный декстоп уровень](https://github.com/pavelsilinw/bem-interface-lib/tree/master/desktop.blocks/rating)

[Уровень переопределения](https://github.com/pavelsilinw/yandex-task/tree/master/common.blocks/rating)


[Пример использования bemjson](https://github.com/pavelsilinw/yandex-task/blob/master/desktop.bundles/rating/rating.bemjson.js)


Блок progress
-------------
Показывает прогресс процесса, рассчитан на css реализацию дизайна, но также может использовать спрайт, внешний вид задается с помощью модификатора theme.

[Выделенный общий уровень](https://github.com/pavelsilinw/bem-interface-lib/tree/master/common.blocks/progress)

[Обший уровень переопределения](https://github.com/pavelsilinw/yandex-task/tree/master/common.blocks/progress)

[Декстоп уровень переопределения](https://github.com/pavelsilinw/yandex-task/tree/master/desktop.blocks/progress)


[Пример использования bemjson](https://github.com/pavelsilinw/yandex-task/blob/master/desktop.bundles/progress/progress.bemjson.js)


Блок button
-------------
Немного расширенный блок button из библиотеки bem-components@v2, позволяет использовать спрайт для дизайна. Внешний вид задается модификатором theme.

[Выделенный общий уровень](https://github.com/pavelsilinw/bem-interface-lib/tree/master/common.blocks/button)

[Выделенный декстоп уровень](https://github.com/pavelsilinw/bem-interface-lib/tree/master/desktop.blocks/button)

[Обший уровень переопределения](https://github.com/pavelsilinw/yandex-task/tree/master/common.blocks/button)


[Пример использования bemjson](https://github.com/pavelsilinw/yandex-task/blob/master/desktop.bundles/button/button.bemjson.js)