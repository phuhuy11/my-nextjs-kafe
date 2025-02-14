module.exports = {
    async redirects() {
      return [
        {
          source: '/',
          destination: '/kafeuno', // Updated to match the new name
          permanent: true,
        },
      ];
    },
  };
  