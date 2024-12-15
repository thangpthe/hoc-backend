const path = require("path");
const uploadSingleFile = async (fileObject) => {
  let uploadPath = path.resolve(__dirname, "../public/images/upload");
  // console.log(path.resolve(__dirname,"../public/images/upload"));
  let extName = path.extname(fileObject.name);
  let baseName = path.basename(fileObject.name, extName);
  let finalName = `${baseName}-${Date.now()}${extName}`;
  let finalPath = `${uploadPath}/${finalName}`;
  try {
    await fileObject.mv(finalPath);
    return {
      status: "success",
      path: "link-image",
      error: null,
    };
  } catch (error) {
    return {
      status: "failed",
      path: null,
      error: JSON.stringify(error),
    };
  }
};

const uploadMultipleFiles = async (fileArr) => {
  try {
    let uploadPath = path.resolve(__dirname, "../public/images/upload");
    let array = [];
    let countSuccess = 0;
    for (let i = 0; i < fileArr.length; i++) {
      // extension name (.png)
      let extName = path.extname(fileArr[i].name);
      // basename(filename.png => filename)
      let baseName = path.basename(fileArr[i].name, extName);
      let finalName = `${baseName}-${Date.now()}${extName}`;
      let finalPath = `${uploadPath}/${finalName}`;
      try {
        await fileArr[i].mv(finalPath);
        array.push({
          status: "success",
          path: finalName,
          fileName: fileArr[i].name,
          error: null,
        });
        countSuccess++;
      } catch (error) {
        array.push({
          status: "failed",
          path: null,
          fileName: fileArr[i].name,
          error: JSON.stringify(err),
        });
      }
    }

    return {
      countSuccess: countSuccess,
      detail: array,
    };
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  uploadSingleFile,
  uploadMultipleFiles,
};
