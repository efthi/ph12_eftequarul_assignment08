export function formatDownloads(num) {
  if (num >= 1_000_000_000) {
    return (num / 1_000_000_000).toFixed(1) + "B";
  } else if (num >= 1_000_000) {
    return (num / 1_000_000).toFixed(1) + "M";
  } else if (num >= 1_000) {
    return (num / 1_000).toFixed(1) + "K";
  } else {
    return num;
  }
}


// export const installedData = () => {
//     try {
//         const data = localStorage.getItem('appList')
        
//     }
// }