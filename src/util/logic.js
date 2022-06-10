export const quizResults = async (arr) => {
    
  return   Object.values(arr).filter((q) => q).length
          
}