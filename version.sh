version_file=src/app.version.js
> $version_file
echo "// This file was generated on $(date)
export const appVersion = '$1';" >> $version_file
git add $version_file
