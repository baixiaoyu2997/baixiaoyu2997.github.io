
cp -rf "E:/Nutstore/private/博客/." "src/_posts/"
echo "拷贝博客到此项目"
set -e
yarn build &
git clone git@github.com:baixiaoyu2997/baixiaoyu2997.github.io.git &
wait
echo "生成静态页面,拉取gh-pages项目"
cp -rf "./dist/." "./baixiaoyu2997.github.io"
cd ./baixiaoyu2997.github.io
git add -A
git commit -m upload
git push origin master
cd ..
echo "上传博客"
rm -rf baixiaoyu2997.github.io
git reset --hard
git clean -df
echo "重置主仓库"
read -p "推送成功，按回车键退出" var
