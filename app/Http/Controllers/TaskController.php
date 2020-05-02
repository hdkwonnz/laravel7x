<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Task;
class TaskController extends Controller
{
    public function addTask(Request $request)
    {
        //// 두가지 예제를 보여준다...
        //// 아래는 첫번째 예제이다.
        // $this->authorize('isAdmin');////for ACL 09/04/2020

        // $task = Task::create([
        //     'task' => $request->task
        // ]);

        //// 위와 다른 예제이다...
        if(\Gate::allows('isAdmin') || \Gate::allows('isAuthor')){
            $task = Task::create([
                'task' => $request->task
            ]);
        }

        return response()->json(['message' => 'task added!'], 200);
    }

    public function getTask()
    {
        // return response()->json(['tasks' => Task::all()], 200);

        if(\Gate::allows('isAdmin') || \Gate::allows('isAuthor')){
            return response()->json(['tasks' => Task::all()], 200);
        }

        return response()->json(['message' => 'got tasks!'], 200);
    }
}
