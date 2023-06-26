export function download(url: string, fileName = '') {
  const link = document.createElement('a');
  document.body.appendChild(link);

  link.download = fileName;
  link.href = url;
  link.click();
  document.body.removeChild(link);
}

export const App = () => (
  <div style={{display: 'flex', gap: '16px'}}>
    <button onclick={() => download('/example.png', 'test.png')}>download test.png</button>
    <button onclick={() => download('/example.png')}>download empty name</button>
  </div>
)
