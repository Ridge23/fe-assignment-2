# React Tree Test Assingment

## Descripotion

Create a tree list with infinite depth.
You can use any technology, but don’t use any libraries that are implementing trees for you.

- Add new leafs to each parent node (you should add A​ dd button)​
- Rename parent node or leaf
- Delete leaf (you should add D​ elete button​)
- Delete parent node with children (you should add D​ elete button)​
- Expand/Collapse parent node (child nodes should collapse too)

## Setup

- run ``npm install`;
- create ``.env`` out of  ``.env.dist``;
- check if ``dist`` folder exists, if not, run: ``mkdir dist && npx msw init dist/ --save``;

## Usage

There is a context menu on each tree element, just right click on tree node or leaf (folder or file) to see;

## Testing

I've covered only part of functionality with tests for now.
Please run ``npm run test``.

## Implementation notes

- @todo check on filename on file rename;
- @todo change fetch absolute URLs;
- @add tests for actions with fetch mocks;