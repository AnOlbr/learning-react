import shortid from 'shortid';

export const getSearchString = state => state.searchString;
export const countVisibleCards = ({cards, searchString}) => cards.filter(card => new RegExp(searchString, 'i').test(card.title)).length;
export const countAllCards = ({cards}) => cards.length;

const reducerName = 'searchString';
const createActionName = name => `app/${reducerName}/${name}`;

export const SEARCH_STRING = createActionName('SEARCH_STRING');

export const createAction_changeSearchString = payload => ({ payload: payload, id: shortid.generate() , type: SEARCH_STRING });

export default function reducer(statePart = '', action = {}) {
  switch (action.type) {
    case SEARCH_STRING:
      return action.payload;
    default:
      return statePart;
  }
}

