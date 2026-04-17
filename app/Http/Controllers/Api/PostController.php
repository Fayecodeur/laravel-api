<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\StorePostRequest;
use App\Http\Requests\UpdatePostRequest;
use App\Http\Resources\PostResource;
use App\Models\Post;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $post = Post::latest()->get();
        return response()->json([
            'status' => true,
            'message' => 'Liste des posts',
            'data' => PostResource::collection($post)
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StorePostRequest $request)
    {
        $post = Post::create($request->validated());
        return response()->json([
            'status' => true,
            'message' => 'Post ajouté avec succés',
            'data' => $post
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $post = Post::find($id);
        if (!$post) {
            return response()->json([
                'status' => false,
                'message' => 'Post introuvable',
            ], 404);
        }

        return response()->json([
            'status' => true,
            'message' => 'Post recupéré avec succes',
            'data' => new PostResource($post)
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdatePostRequest $request, string $id)
    {
        $post = Post::find($id);
        if (!$post) {
            return response()->json([
                'status' => false,
                'message' => 'Post introuvable',
            ], 404);
        }

        $post->update($request->validated());
        return response()->json([
            'status' => true,
            'message' => 'Post modifier avec succés',
            'data' => new PostResource($post)
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $post = Post::find($id);
        if (!$post) {
            return response()->json([
                'status' => false,
                'message' => 'Post introuvable',
            ], 404);
        }
        $post->delete();
        return response()->json([
            'status' => true,
            'message' => 'Post supprimé avec succés',
        ]);
    }
}
