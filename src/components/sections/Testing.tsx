import React, { useCallback, useState, useRef } from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload, RefreshCw, AlertCircle } from 'lucide-react';
import * as tf from '@tensorflow/tfjs';

const models = [
  { id: 'inceptionv3', name: 'InceptionV3', path: '/models/inceptionv3/model.json' },
  { id: 'efficientnet', name: 'EfficientNetB0', path: '/models/efficientnet/model.json' },
  { id: 'resnet50', name: 'ResNet50', path: '/models/resnet50/model.json' }
];

export default function Testing() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedModel, setSelectedModel] = useState(models[0].id);
  const [prediction, setPrediction] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedImage(reader.result as string);
        setPrediction(null);
        setError(null);
      };
      reader.readAsDataURL(file);
    }
  }, []);
  
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png']
    },
    multiple: false
  });
  
  const handleTest = async () => {
    if (!selectedImage) {
      setError('Please upload an image first');
      return;
    }
    
    setIsLoading(true);
    setError(null);
    
    try {
      // Load and preprocess image
      const img = new Image();
      img.src = selectedImage;
      await new Promise(resolve => img.onload = resolve);
      
      // Convert image to tensor
      const tensor = tf.browser.fromPixels(img)
        .resizeBilinear([224, 224])
        .expandDims()
        .toFloat()
        .div(255);
      
      // Load model and make prediction
      const model = await tf.loadLayersModel(models.find(m => m.id === selectedModel)?.path || '');
      const prediction = await model.predict(tensor);
      
      // Get prediction result
      const result = Array.isArray(prediction) ? prediction[0] : prediction;
      const probabilities = await result.data();
      const predictedClass = probabilities[0] > 0.5 ? 'Venomous' : 'Non-venomous';
      const confidence = (Math.max(...probabilities) * 100).toFixed(2);
      
      setPrediction(`${predictedClass} (${confidence}% confidence)`);
    } catch (err) {
      setError('Error making prediction. Please try again.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <section id="testing" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-8 text-center">Test Our Models</h2>
          
          <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-green-700 mb-4">Select Model</h3>
              <div className="flex flex-wrap gap-4">
                {models.map((model) => (
                  <button
                    key={model.id}
                    onClick={() => setSelectedModel(model.id)}
                    className={`px-4 py-2 rounded-lg transition-colors ${
                      selectedModel === model.id
                        ? 'bg-green-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {model.name}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-green-700 mb-4">Upload Image</h3>
              <div
                {...getRootProps()}
                className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors ${
                  isDragActive ? 'border-green-500 bg-green-50' : 'border-gray-300 hover:border-green-500'
                }`}
              >
                <input {...getInputProps()} />
                <Upload className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                <p className="text-gray-600">
                  {isDragActive
                    ? 'Drop the image here'
                    : 'Drag & drop an image here, or click to select one'
                }
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  Supported formats: JPEG, PNG
                </p>
              </div>
            </div>
            
            {selectedImage && (
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-green-700 mb-4">Preview</h3>
                <div className="relative w-full max-w-md mx-auto">
                  <img
                    src={selectedImage}
                    alt="Preview"
                    className="rounded-lg shadow-md w-full"
                  />
                </div>
              </div>
            )}
            
            <div className="flex flex-col items-center gap-4">
              <button
                onClick={handleTest}
                disabled={isLoading || !selectedImage}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium text-white transition-colors ${
                  isLoading || !selectedImage
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-green-600 hover:bg-green-700'
                }`}
              >
                {isLoading ? (
                  <>
                    <RefreshCw className="animate-spin" size={20} />
                    Processing...
                  </>
                ) : (
                  'Test Image'
                )}
              </button>
              
              {error && (
                <div className="flex items-center gap-2 text-red-600">
                  <AlertCircle size={20} />
                  {error}
                </div>
              )}
              
              {prediction && (
                <div className="text-center">
                  <h4 className="font-semibold text-lg mb-2">Result:</h4>
                  <p className="text-xl font-bold text-green-700">{prediction}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


// I have my 3 model .py files, i.e., inception.py, efficient.py and resnet.py, now help me create a directory where I can place them and run to build actual models which this testing component can actullay call, 