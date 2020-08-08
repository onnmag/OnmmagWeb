const OPTION_TYPES = {
  SAVE: 'SAVE',
  REPORT: 'REPORT',
  UNFOLLOW: 'UNFOLLOW',
  GO_TO_POST: 'GO_TO_POST',
  SHARE: 'SHARE',
  COPY_LINK: 'COPY_LINK',
  CANCEL: 'CANCEL',
};

const OPTIONS = [{
  id: 'SAVE',
  type: OPTION_TYPES.SAVE,
  displayText: 'Save',
}, {
  id: 'REPORT',
  type: OPTION_TYPES.REPORT,
  displayText: 'Report',
}, {
  id: 'UNFOLLOW',
  type: OPTION_TYPES.UNFOLLOW,
  displayText: 'Unfollow',
}, {
  id: 'GO_TO_POST',
  type: OPTION_TYPES.GO_TO_POST,
  displayText: 'Go to post',
}, {
  id: 'SHARE',
  type: OPTION_TYPES.SHARE,
  displayText: 'share',
}, {
  id: 'COPY_LINK',
  type: OPTION_TYPES.COPY_LINK,
  displayText: 'Copy link',
}, {
  id: 'CANCEL',
  type: OPTION_TYPES.CANCEL,
  displayText: 'cancel',
}];

export {
  OPTIONS,
  OPTION_TYPES,
};
