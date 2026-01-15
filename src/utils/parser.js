export function parseArgs(args) {
  const result = {
    command: null,
    type: null,
    table: null,
    path: 'output'
  };

  if (args.length === 0) return result;

  result.command = args[0]; // 'generate'
  
  if (args.length > 1) {
    result.type = args[1]; // 'route'
  }
  
  if (args.length > 2) {
    result.table = args[2]; // 'citations'
  }
  if (args.length > 3) {
    result.path = args[3]; // 'path'
  }
  return result;
}
