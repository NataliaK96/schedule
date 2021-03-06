# Документация

Schedule - удобное и функциональное расписание занятий для студентов и менторов RS School, интегрируется в rs app.

Для разработки приложения использовались:
- React + Redux (для организации бизнес-логики использовались селекторы в редаксе)
- TypeScript
- Ant Design for react
- Prettier
- Trello
- React-create-app

# Структура приложения

### Основные компоненты:
- Кнопка смены часового пояса
- Кнопка переключения расписания в виде списка/календаря
- Окно настроек цветов для тегов

Цвета определены из палитры Ant Design и по умолчанию в зависимости от типа события распределены следующим образом:

1) self education - gold
2) deadline - red (дедлайны для тасков, кроссчека и т.д.)
3) task review - orange
4) task start - green (выдача тасков и задач)
5) online lecture - blue
6) elective - purpure
7) cross check start - lime
8) test - magenta
- Настройка видимости колонок
- Переключатель расписания для ментора/студента
- Кнопка для добавления ментором нового события
- Сохранение расписания в формате CSV

В роли ментора можно добавлять, редактировать и удалять события в расписании как в виде таблицы, так и в виде календаря.

Для добавления нового события требуется нажать на кнопку "+", затем в открывшемся модальном окне настроек события заполнить желаемые поля формы и нажать кнопку "OK".

Для редактирования события в режиме таблицы требуется двойным кликом по строке с нужным событием открыть окно настроек события и отредактировать желаемые поля формы и для сохранения изменений нажать кнопку "OK".

Для редактирования события в режиме календаря требуется кликнуть по событию, в открывшемся модальном окне справа от названия нажать на кнопку редактирования события.

Для удаления события требуется открыть окно настроек события и нажать кнопку "Delete".

# Установка 
Для того, чтобы запустить приложение, выполните следующие пункты:

1) Склонируйте репозиторий на свой ПК.
2) Для разработки была использована Node.js v12.18.3. Убедитесь, что вы используете актуальную версию.
3) Установите пакеты, введя в терминале следующую команду:
```sh
$ npm install 
```
# Запуск
После успешной установки запустите виртуальный сервер с проектом, введя в терминал следующую команду:
```sh
$ npm run start
```
