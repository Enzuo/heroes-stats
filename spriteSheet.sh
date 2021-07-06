#!/bin/sh


resizeAllImages(){
  size=$1

  rm public/tmp/*
  cd public/img/
  list=$(ls *.png)
  cd ../../

  for img in $list; do
  name=$(magick public/img/$img -format "%t" info:)
  suffix=$(magick public/img/$img -format "%e" info:)
  magick public/img/$img -resize ${size}x${size} "public/tmp/${name}_${size}.${suffix}"
  done
}

mkdir public/tmp

#
resizeAllImages 125
node spriteSheetCompose.js 125
magick public/sprite/heroes125.png -quality 70 public/sprite/heroes125.jpg

#
resizeAllImages 64
node spriteSheetCompose.js 64
magick public/sprite/heroes64.png -quality 92 public/sprite/heroes64.jpg





rm public/tmp/*
rm -r public/tmp/
