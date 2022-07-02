const Enter = () => {
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      console.log('do validate');
    }
  };

  return <input type="text" onKeyDown={handleKeyDown} />;
};
export default Enter;
