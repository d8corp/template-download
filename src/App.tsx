export function download(url: string, fileName?: string) {
  const link = document.createElement('a');
  document.body.appendChild(link);

  if (fileName) {
    link.download = fileName;
  }

  link.href = url;
  link.click();
  document.body.removeChild(link);
}

export const App = () => (
  <button onclick={() => download('/example.png', 'test.png')}>download</button>
)
