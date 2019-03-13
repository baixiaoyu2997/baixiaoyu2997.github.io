
cp -rf "E:/Nutstore/private/博客/." "src/_posts/"
echo "拷贝博客到此项目"
set -e
yarn build
echo "生成静态页面"
git stash push -u -m 储藏
git checkout -q master
git stash pop
cd dist
mv * ../
rm dist
git add -A
git commit -m upload
git push origin master
echo "上传博客"
git checkout -q dev
git reset --hard
git clean -df
echo "重置主仓库"
read -p "推送成功，按回车键退出" var
