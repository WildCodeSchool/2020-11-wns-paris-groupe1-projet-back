export default {
  __resolveType(obj) {
    if (obj.message) {
      return 'Message';
    }

    if (obj.id) {
      return 'User';
    }

    return null;
  },
};
