---
title: Wildfire Prediction via Semantic Segmentation
description: A semantic segmentation model that predicts U.S. wildfire risk from climate raster data, published at the STEM Fellowship Big Data Challenge 2023.
tags:
  - projects
  - python
  - tensorflow
  - machine-learning
  - research
---

STEM Fellowship Big Data Challenge 2023 · [Read the paper](https://drive.google.com/file/d/17VzJ2ki5vfzq2MjZK_dueFeCMcsKuCvk/view) · with David Shan, Jacob Jansen, Mathis Luo, and Robbie Muranaka (Crescent School)

A research paper predicting wildfire risk across the Contiguous United States before fires occur, by training semantic segmentation models on temperature, precipitation, wind, and humidity data rather than relying on post-hoc detection.

## Data

Raster climate data came from the gridMET, MODIS, LANDFIRE, and CROPLAND datasets for July 1, 2020 — peak wildfire season — sourced from Google Earth Engine and normalized to the EPSG:4326 coordinate grid. Label data came from the USDA Forest Service's Wildfire Hazard Potential Map. The area was split into 256 km² GeoJSON tiles clipped to the CONUS boundary, then divided 80/20 into training and validation sets.

## Models

Two semantic segmentation architectures were trained and compared: UNet (implemented from scratch to avoid issues with pretrained weights) and FCN with a ResNet50 backbone, both optimized with Adam and categorical cross-entropy loss. Outputs were reassembled into GeoTIFFs and rendered as risk heatmaps in QGIS.

## Results

UNet reached 80% pixel-level accuracy after 13 epochs, outperforming FCN ResNet50's 76.18% after 6 epochs, and was used for the final visualizations. The model's highest-risk predictions concentrated on the West Coast, consistent with the large wildfires that occurred there through 2021 — and confirmed the expected pattern that risk rises sharply where precipitation and humidity are low and wind speed and temperature are high.

**Stack:** Python, TensorFlow, GDAL, Rasterio, QGIS, GeoPandas, Google Earth Engine

Back to [[projects/index|Projects]].
