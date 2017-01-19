import * as types from '../constants/actionTypes';
import * as gensApi from "../apis/GensApi";

export function beginLoadgGensData() {
  return {type: types.BEGIN_LOAD_GENS_DATA};
}

export function loadGensData() {
  return function (dispatch) {
    dispatch(beginLoadgGensData());
    gensApi.loadGensApi()
      .then(function (res) {
        dispatch(loadedGensData(res));
      });
  }
}

export function loadedGensData(res) {
  res.data.gens.sort(function(gen1, gen2){
    if(parseInt(gen1.name) > parseInt(gen2.name) ) return -1;
    if(parseInt(gen1.name) < parseInt(gen2.name) ) return 1;
    return 0;
  });
  return (
    {
      type: types.LOADED_GENS_DATA,
      gens: res.data.gens
    })
    ;
}
