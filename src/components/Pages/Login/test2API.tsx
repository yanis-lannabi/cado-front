import React, { useEffect } from 'react';

const TEST: React.FC = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://165.227.232.51:5000/users');
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);

  return <div>Test Component</div>;
};

export default TEST;
