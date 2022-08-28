export const debugRender = (componentName: string): void => {
  if (process.env.REACT_APP_DEBUG) {
    console.log(`[${componentName}] render`);
  }
};
